---
title: BIM TaskForce OS
tags:
  - Budding🌿
  - Software_Development
date: 2024-09-21
---
### Basis of the Idea
Companies struggle with maintaining a proper framework of maintaining BIM Projects. Tight schedules and deliverables can have serious impact on the quality of information in the models. 

BIM OS stems from the idea that workflows in BIM deliverables do not deviate per project and be maintained across all the projects in an organization.

### Aim for the idea
BIM OS becomes part of the daily workflow in the team.
BIM OS offers value in terms of thorough analysis of the condition of the model. 
BIM OS considers it as the Model Health Checkup but not just for a model but instead for the entire project.
BIM OS is part of a larger suite of application - [[Consultant Operating System]].
BIM OS takes regular updates of models. 
BIM OS defines key metrics and workflows in the organization. 
BIM OS helps deliver a project and supply reports to all project stakeholders within the scope.

With the idea that every tool should do just one thing best. Anything else is either a complimenting feature that aids the main feature or a complete waste.

### Existing Solutions in the Market


### Backend Workflow

1. Cron jobs firing up sequence of task at a user defined interval. 
2. Sequence one opens individual Revit files one by one in a project. In a detached state. 
3. BIM OS Defined Model Health Checkup extracts model health at that point in time.
4. NWC Files to be extracted.
5. IFC Files to be extracted and uploaded into IFC.js framework for local processing
6. Run Clash Detection on a user defined interval. On a clash matrix.
7. Extract Report 
8. Generate Reports in the BIM OS Dashboards

### Frontend Workflow

* Visualize Reports and see project status. 
* AI driven analysis on the trends of the 
* Graphs Bar Graphs
* Blame Feature - On the most amount of work needed per discipline.
* One UI Available in Revit / Desktop App showing Element IDs per Revit model to be highlighted.
* Productivity focused UI. 
* To - Do list oriented task management. 
* Assigned Clashes to be resolved on a priority basis. 
* Assisting coordination in the project. 

* Model based commenting. No more snips or failed attachments in an email. 
* Highlight Model Elements that need attention. 



### Future Idea
Replace BIM Collab towards aio solution. 
Replace Hatchback
Local CDE


```
This needs to be robust enough to handle multiple scales of project. 
Have strong logic to avoid any data loss.
```
