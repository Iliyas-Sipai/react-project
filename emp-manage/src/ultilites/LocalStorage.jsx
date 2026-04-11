import { fromJSON } from "postcss";

const employees = [
  {
    id: 1,
    name: "Rohit Sharma",
    email: "rohit@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI in React",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar toggle issue",
        category: "Bug Fix",
      },
    ],
  },
  {
    id: 2,
    name: "Sana Khan",
    email: "sana@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect login API with frontend",
        category: "Backend",
      },
    ],
  },
  {
    id: 3,
    name: "Arjun Patel",
    email: "arjun@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard layout",
        category: "Frontend",
      },
    ],
  },
  {
    id: 4,
    name: "Meena Verma",
    email: "meena@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add profile editing feature",
        category: "Feature",
      },
    ],
  },
  {
    id: 5,
    name: "Vikas Singh",
    email: "vikas@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB for project",
        category: "Database",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () =>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = () =>{
   const data = localStorage.getItem('employees')  
   console.log(JSON.parse(data));
   return{employees,admin}
}

