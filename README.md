# MyUI - Transportation Management System

A modern React-based transportation management system with an intuitive sidebar navigation and comprehensive driver/vehicle management capabilities.

## 🚀 Features

### 🎨 **User Interface**
- **Responsive Sidebar Navigation** - Collapsible sidebar with smooth transitions
- **Active State Management** - Visual feedback for selected menu items
- **Material-UI Components** - Modern, accessible UI components
- **Color-coded Navigation** - Purple for Cars & Drivers, Red for Requests

### 🚗 **Transportation Management**
- **Driver Management** - Add, edit, and view driver profiles
- **Vehicle Information** - Car details and passenger capacity
- **Request Tracking** - Transportation request management
- **Status Monitoring** - Real-time status updates

### 📱 **Responsive Design**
- **Mobile-friendly** - Optimized for all screen sizes
- **Collapsible Sidebar** - Space-efficient navigation
- **Hover Effects** - Interactive UI elements

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - Component library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling and animations
- **Local Storage** - State persistence

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd myui-project/myui

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3001`

## 🏗️ Project Structure

```
myui/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Sidebar.js              # Main navigation sidebar
│   │   ├── TransportationRequest.js # Request management
│   │   ├── DriversListPage.js      # Driver list and management
│   │   └── DriverDetailsModal.js   # Driver profile modal
│   ├── context/
│   │   └── SidebarContext.js       # Sidebar state management
│   ├── images/
│   │   └── logo.png               # Application logo
│   ├── App.js                     # Main application component
│   ├── App.css                    # Global styles
│   └── index.js                   # Application entry point
└── package.json
```

## 🎯 Key Components

### **Sidebar Navigation**
- **Active State Management** - Tracks selected menu items
- **Color Coding** - Visual distinction between sections
- **Responsive Design** - Collapsible for mobile devices

### **Driver Management**
- **Driver Profiles** - Comprehensive driver information
- **Edit Functionality** - In-place editing with validation
- **Modal Interface** - Clean, focused editing experience

### **Transportation Requests**
- **Request Tracking** - Monitor transportation requests
- **Status Updates** - Real-time status management
- **Filtering Options** - Easy request organization

## 🎨 Design System

### **Colors**
- **Primary Purple**: `#8B5CF6` - Cars & Drivers section
- **Alert Red**: `#ff4444` - Requests section
- **Neutral Gray**: `#666` - Inactive states
- **Background**: `#f0f1f8` - Container backgrounds

### **Typography**
- **Font Family**: Inter, sans-serif
- **Responsive Sizing** - Scales with screen size
- **Weight Variations** - Normal and bold for hierarchy

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Netlify**
1. Build the application
2. Drag the `build` folder to Netlify
3. Configure redirects if needed

### **Environment Variables**
Create a `.env` file for environment-specific settings:
```
REACT_APP_API_URL=your-api-url
REACT_APP_VERSION=1.0.0
```

## 📱 Usage

### **Navigation**
- Click sidebar items to navigate between sections
- Use the collapse button to minimize sidebar
- Active items are highlighted with color coding

### **Driver Management**
- View driver list in the Cars & Drivers section
- Click "Add Driver" to create new profiles
- Click driver names to edit details
- Save changes with the submit button

### **Request Management**
- Access transportation requests in the Requests section
- Filter and sort requests as needed
- Update request statuses

## 🔧 Development

### **Available Scripts**
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run eject      # Eject from Create React App
```

### **Code Style**
- **ES6+ Features** - Modern JavaScript syntax
- **Functional Components** - React hooks pattern
- **Material-UI Standards** - Consistent component usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the component examples

---

**Built with ❤️ using React and Material-UI**
