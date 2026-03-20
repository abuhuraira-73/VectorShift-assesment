from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from collections import deque, defaultdict

app = FastAPI()

# Enable CORS so the frontend can talk to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    
    # 1. Count nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # 2. Check for DAG (Directed Acyclic Graph)
    # We use Kahn's Algorithm (Topological Sort) to detect cycles
    is_dag = check_if_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

def check_if_dag(nodes, edges):
    # Create an adjacency list and a map for in-degrees (incoming connections)
    adj = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        adj[source].append(target)
        in_degree[target] = in_degree.get(target, 0) + 1
        
    # Queue for nodes with 0 incoming connections
    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    
    visited_count = 0
    while queue:
        u = queue.popleft()
        visited_count += 1
        
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    # If we visited all nodes, it's a DAG. If not, there's a loop!
    return visited_count == len(nodes)
