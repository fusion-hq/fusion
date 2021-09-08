/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useContext } from "react";
import "./Settings.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Button } from "antd";
import SetupWizard from "../../Components/SetupWizard/SetupWizard";
import { SetupWizardContext } from "../../Context/SetupWizardContext";
import { ToolOutlined, ApiOutlined } from "@ant-design/icons";

function Settings() {
  const [setupWizardVisible, setSetupWizardVisible] =
    useContext(SetupWizardContext);

  return (
    <div className="Settings">
      <div className="main-container">
        <Sidenav />
        <div className="content-container">
          <div className="content">
            <div className="header">
              <h1>Settings</h1>
              <p>System settings & useful tools</p>
            </div>
            <SetupWizard />
            <Button
              icon={<ApiOutlined />}
              type="primary"
              onClick={() => {
                setSetupWizardVisible(true);
              }}
            >
              Launch Setup Wizard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
