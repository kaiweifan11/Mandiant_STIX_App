# Displays information on Mandiant’s APT1 report

Note: uses AntD for UI Components

Steps to install
    run npm install
    navigate to folder and run $npm run start

Solution (What I have done)
- Retrieve the examples JSON using hook,
- Populate the data table and filters using the data retrieved.
- Created drawers for detail information for each row  

Question:
Building a web application

Background Information
The Mandiant® Intelligence Center™ released a report exposing APT1's multi-year, enterprise-scale computer espionage campaign. APT1 is one of dozens of threat groups Mandiant tracks around the world and considered to be one of the most prolific in terms of the sheer quantity of information it has stolen.
Structured Threat Information Expression (STIX™) is a language and serialization format used to exchange cyber threat intelligence (CTI). STIX website has an example use case where the Mandiant APT1 report is converted into JSON representation of the STIX format.

Requirements
Build a web application that reads the STIX JSON representation of Mandiant’s APT1 report and displays the threat report information to users. You should build web components that allows users to perform the following activities:
1.	Enable user to view detailed information on the malwares and tools used in the campaign.
a.	Users should be able to search/filter the data by type, name, and kill chain phrases.
2.	(Optional) Enable user to view on a map the location of the threat actors identified.
a.	Use markers to mark on the map the location of the threat actors.
b.	The markers should be placed dynamically based on the JSON data, and not static images.
3.	Enable user to view the attack patterns of APT1, and describe it according to the Mandiant kill change phrases.
4.	Enable user to view in graph format the relationship between the different STIX objects as represented in the JSON file. See example of graph below.
a.	The graph should be drawn programmatically using the JSON data and not use static image.

