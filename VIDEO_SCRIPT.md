# Video Walkthrough Script - VectorShift Assessment

Use this script as a guide for your screen recording. It’s broken down into scenes so you can easily show off each feature.

---

## Introduction (30 seconds)
**On Screen**: Your browser with the empty canvas and the 9 buttons at the top.
**What to say**: 
"Hi there! I'm Abu Huraira, and this is my submission for the VectorShift Frontend Technical Assessment. I've built a fully functional No-Code Pipeline builder that matches the VectorShift aesthetic. I've focused on clean code, reusable components, and some advanced dynamic features."

---

## Scene 1: The "Glow Up" & Node Abstraction (1 minute)
**On Screen**: Drag an **Input** and an **LLM** node onto the canvas.
**What to say**: 
"First, let's talk about the design. I was really inspired by the VectorShift dark-mode theme, so I've updated the entire UI with a professional deep navy and purple palette. 

Technically, I didn't want to repeat code for every node, so I built a **BaseNode blueprint**. This master component handles the headers, the styling, and the connection handles. This made the code much cleaner and allowed me to add new nodes in just minutes."

---

## Scene 2: Showing the 5 New Nodes (1.5 minutes)
**On Screen**: Drag the **Note**, **Date**, **Math**, and **Image** nodes onto the screen.
**What to say**: 
"Using that blueprint, I added 5 brand-new nodes to the toolbar:
1. **The Note Node**: A simple sticky note for leaving comments.
2. **The Date Picker**: A modern calendar input for scheduling.
3. **The Math Node**: This actually calculates results in real-time! If I change these numbers, the result updates instantly on the screen.
4. **The Choice Node**: A clean dropdown menu.
5. **The Image Node**: This is one of my favorites. It supports both pasting a URL or uploading a file directly from my computer to preview it in the pipeline."

---

## Scene 3: The Smart Text Node (1.5 minutes)
**On Screen**: Drag a **Text** node. Type: `Hello {{ name }}, welcome to {{ project }}`.
**What to say**: 
"Now, let's look at the **Smart Text Node**. I’ve implemented two advanced features here:
- First, it **Auto-Resizes**. As I type more lines, the box grows taller so the user never has to deal with tiny scrollbars.
- Second, I’ve added **Dynamic Variable Detection**. Notice how as I typed those double curly brackets, new connection handles automatically appeared on the left side. If I delete them, they vanish. This makes building dynamic prompts really intuitive."

---

## Scene 4: Backend Integration & Loop Check (1 minute)
**On Screen**: Create a loop (LLM-1 -> LLM-2 -> LLM-1). Click the **Submit Pipeline** button.
**What to say**: 
"Finally, I’ve connected the frontend to a Python FastAPI backend. When I hit 'Submit,' the system counts all nodes and edges and performs a **DAG check**—which stands for Directed Acyclic Graph. 

Because I’ve created a loop here between these two LLMs, the system correctly identifies that this isn't a valid DAG and alerts the user. If I break the loop and submit again, it confirms the pipeline is valid. This ensures that users don't create infinite loops that would break their AI workflows."

---

## Conclusion (20 seconds)
**On Screen**: Your full beautiful canvas with a variety of nodes connected.
**What to say**: 
"I've really enjoyed working on this—it was a great way to show how I handle reusable React components, dynamic UI logic, and backend integration. Everything is pushed to my GitHub and ready for review. Thanks for your time!"

---

### Tips for your recording:
1. **Go slow**: Give the viewer a second to see the change after you type or click.
2. **Be proud**: You built some really cool features like the Image Upload and the Magic Handles—make sure to sound excited about them!
3. **Resolution**: Make sure your text is big enough to read on the video.
