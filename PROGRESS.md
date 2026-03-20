# My Technical Assessment Progress

## Rules for this Project
1. **Wait for me**: Do not change any code until I specifically tell you to do so.
2. **Keep it simple**: The code should look like I wrote it—clean, easy to explain, and not "over-engineered" AI code. I need to be able to explain everything in my screen recording.
3. **Log the steps**: Only update the "What I've Done" section when I tell you to. Make it sound like my own notes.

---

## What the Company Wants (The Requirements)

### 1. The "Master" Node Template
- I need to stop repeating the same code for every single block (Input, Output, etc.).
- I need to create one "Master" component that handles the title, the border, and the connection dots.
- Once that's done, I need to make **5 brand new blocks** to show how easy it is to add them (things like a Date picker, a Note box, a Math block, etc.).

### 2. Making it Look Professional
- The current design is basically empty. I need to style everything so it looks like a real, high-quality app.
- This includes the blocks themselves, the background, and the toolbar where I drag things from.

### 3. Making the "Text" Block Smart
- **Auto-Size**: As I type more into the Text block, the box should get bigger automatically so I can see what I'm writing.
- **Dynamic Connection Dots**: If I type a variable name in double curly brackets like `{{ example }}`, a new connection point should instantly appear on the left side of that block. This is for plugging data into that variable.

### 4. The Final Submit & Backend Check
- I need to connect the "Submit" button to the Python backend.
- The backend should:
    - Count how many blocks and connections are in the pipeline.
    - Check if there are any "infinite loops" (this is called a DAG check).
- Finally, I need to show a nice alert on the screen with the results (count of nodes, edges, and if it's a valid pipeline).

---

## My Step-by-Step Plan

1. **Step 1: Build the Master Template**: Create a single "Base" component to handle the look and the connection points for all blocks.
2. **Step 2: Update the Old Blocks**: Go into the existing Input, Output, LLM, and Text blocks and swap their old code for the new Master template.
3. **Step 3: Create 5 New Blocks**: Quickly build 5 more types of nodes using the new template.
4. **Step 4: Style Everything**: Add CSS to give it a clean, professional look (colors, shadows, rounded corners).
5. **Step 5: Code the "Smart" Text Block**: Write the logic for the Text block to grow when I type and detect the `{{ curly brackets }}` for the extra connection points.
6. **Step 6: Handle the "Submit" Logic**: Update the frontend to send the map of nodes and edges to the backend.
7. **Step 7: Build the Backend "Loop Check"**: Write the Python logic to count everything and check for those infinite loops (DAG).
8. **Step 8: Show the Result**: Make sure the frontend shows a clean alert with all the info from the backend.

---

## What I've Done So Far
- Downloaded the project files and got the environment set up.
- Fixed the Python backend issues (installed `fastapi`, `uvicorn`, and `python-multipart`).
- Fixed the Frontend permissions issue on my Mac and got the React app running on `localhost:3000`.
- Planned out the detailed steps for the rest of the project.
