import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import './Results.css';

export default function Results() {
  return (
    <div className="Tab-wrapper mx-auto mt-5">
      <Tabs>
        <TabList>
          <Tab>Today's Weather</Tab>
          <Tab>7-day Forecasts</Tab>
        </TabList>
        <TabPanel>
          <p>Yo</p>
        </TabPanel>
        <TabPanel>
          <p>Yo</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
