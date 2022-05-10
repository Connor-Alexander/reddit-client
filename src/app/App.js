import React from "react";
import Dashboard from "../features/Dashboard/Dashboard";
import Refresh from "../features/Refresh/Refresh";
import { refreshAsync } from "../features/Refresh/refreshSlice";
import './App.css';

function App() {

    return (
        // <Header />
        <div className="App">
            <header className="App-header">
                {/* Refresh Button for Testing */}
                <Refresh />
            </header>
            <main className="App-main">
                <Dashboard />
            </main>
        </div>
    );
}

export default App;