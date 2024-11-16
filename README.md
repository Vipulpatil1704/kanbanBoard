# **Kanban Board Application**

This project is an **interactive Kanban board application** built using **ReactJS**. The application allows users to group and sort tickets dynamically based on different criteria, with all data fetched from the provided API. The design is responsive and matches the provided UI specifications.

---

## **Features**

### **Dynamic Grouping**
Users can group the tickets in three distinct ways:
1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets by the assigned user.
3. **By Priority**: Group tickets based on their priority level.

### **Sorting Options**
Users can sort tickets within groups using:
1. **Priority**: Tickets are arranged in descending order of priority (e.g., Urgent to No Priority).
2. **Title**: Tickets are sorted in ascending alphabetical order by title.

### **Priority Levels**
The tickets are classified by priority levels:
- **Urgent (Priority 4)**
- **High (Priority 3)**
- **Medium (Priority 2)**
- **Low (Priority 1)**
- **No Priority (Priority 0)**

### **Responsive Design**
The UI is fully responsive and visually appealing, ensuring usability across all devices.

### **State Persistence**
The application saves the user’s view state (grouping and sorting preferences) even after a page reload.

---

## **API Integration**
The application fetches ticket data from the following API endpoint:

**API URL**: [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

---

## **Project Setup**

1. Clone the repository:
   git clone https://github.com/Vipulpatil1704/kanbanBoard.git
2. cd myapp
3. run command : npm install
4. run command : npm start
5. Open the application in your browser at http://localhost:3000.
