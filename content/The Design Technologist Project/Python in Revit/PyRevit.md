This would allow us to spin up quick sketches of simple or complex tools. This can be the basis for any great C# tool. Ready to be sold, etc. 

[[Python and C# are not Competitors]] - [[Any comparison between Python and C# is not just]]

Learning this would mean I just began with [[The Design Technologist Project]]

---

### pyRevit Folder Structure

#### (name).extension

All pyRevit plugins start from the folder with the ending .extension. 
	This adds a new tab in Revit to be have separate commands as buttons. 

#### Command Bundles
##### (name).pushbutton
This is what gets executed when clicked. It Consists of
- A `(name)_script.py/cs` file that is basically the program to execute.
- An optional `(name)_config.py/cs` file that can customize the  `(name)_script.py/cs` file. 
- An `(name)_icon.png` file for the logo of the command to be pressed.
- An optional `/lib` folder that would host all definitions and classes required for the `(name)_script.py/cs` to run. 

#### Group Bundles

A way for having groupings in pyRevit commands. 

**Types of Bundles**

##### (name).tab
Creates the Tabs in the Ribbon. This is the master name of the plugin

##### (name).panel
>Need to look into this more. What it does and how does it differentiate from others.

Creates a panel in the Ribbon with the name of the Bundle. This is useful to categorize commands in different area.
##### (name).pulldown
Let's you have pulldowns do group similar yet different in configuration.






# Important Classes

To collect elements - FilteredElementCollector