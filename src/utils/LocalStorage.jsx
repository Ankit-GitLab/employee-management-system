import { useEffect } from "react";

const employees = [
  {
    "id": 1,
    "firstName": "Rahul",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": 3,
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "Revamp the homepage design",
        "taskDate": "2026-10-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client meeting",
        "taskDescription": "Discuss project requirements",
        "taskDate": "2026-10-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix bugs",
        "taskDescription": "Resolve bugs reported in issue tracker",
        "taskDate": "2026-10-14",
        "category": "Development"
      }
    ]
  },

  {
    "id": 2,
    "firstName": "Amit",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": 4,
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2026-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design new feature",
        "taskDescription": "Create mockups for the new feature",
        "taskDate": "2026-10-09",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the payment API",
        "taskDate": "2026-10-15",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Configuration",
        "taskDescription": "Configure the production server",
        "taskDate": "2026-10-16",
        "category": "DevOps"
      }
    ]
  },

  {
    "id": 3,
    "firstName": "Rohit",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": 5,
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "taskDescription": "Prepare slides for upcoming client presentation",
        "taskDate": "2026-10-13",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review the codebase for optimization",
        "taskDate": "2026-10-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Testing",
        "taskDescription": "Test the latest build for bugs",
        "taskDate": "2026-10-08",
        "category": "QA"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Frontend Development",
        "taskDescription": "Build responsive dashboard components",
        "taskDate": "2026-10-17",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs in the application",
        "taskDate": "2026-10-07",
        "category": "Development"
      }
    ]
  },

  {
    "id": 4,
    "firstName": "Vikas",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": 4,
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write documentation",
        "taskDescription": "Update the project documentation",
        "taskDate": "2026-10-13",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Set up CI/CD",
        "taskDescription": "Implement continuous integration pipeline",
        "taskDate": "2026-10-11",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Discuss weekly development progress",
        "taskDate": "2026-10-09",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Documentation",
        "taskDescription": "Document important functions and APIs",
        "taskDate": "2026-10-18",
        "category": "Documentation"
      }
    ]
  },

  {
    "id": 5,
    "firstName": "Sandeep",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": 6,
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UI Redesign",
        "taskDescription": "Redesign the user interface for better UX",
        "taskDate": "2026-10-14",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Deploy new build",
        "taskDescription": "Deploy the latest build to production",
        "taskDate": "2026-10-09",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client feedback",
        "taskDescription": "Gather feedback from clients after product launch",
        "taskDate": "2026-10-12",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Performance Optimization",
        "taskDescription": "Improve application loading speed",
        "taskDate": "2026-10-19",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Project Report",
        "taskDescription": "Prepare the final project report",
        "taskDate": "2026-10-10",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Deployment",
        "taskDescription": "Deploy application on production server",
        "taskDate": "2026-10-06",
        "category": "DevOps"
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "email": "ankit@gmail.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}

};

