Honeybee is used for Energy Modelling. 

i.e. Creating models from scratch. Just for simulation and extracting data 

3 Main Tabs from Honeybee

Tab 1 - Honeybee General - Used to Create Honeybee Rooms and used to create Honeybee Energy Models. 

Tab 2 - Honeybee Energy - Used to Create the Energy Calculations, etc. 


## Prepping the Model

Firstly, create the Model in such a way that the model is clean and devoid of all irregular adjacencies. 
Then Intersect the solids, kind of a Boolean operation of Honeybee. 



- Rooms are represented as solids. Closed Solids with no openings.
- All of them need to be attached face to face for adjacent rooms
- Windows and openings should be modelled as plane faces attached to the faces of the rooms.
- Models need to be simple!!! Super Important. Low Poly!



Step 1 Breakdown
Prepare the Model in Honeybee
	Use HB Room from Solid. Input contains Brep for Rooms with closed Breps. 
	Name to be specified. This becomes `HoneyBee Room` 
	Modifier Set
	Construction Set. Materials etc,
	Programs from the rooms. 

Modifiers to the HB Model
You get modifiers in the HB Energy TAB

Construction Set
Program 



To set different modifiers to different spaces, we will need to separate the zones / rooms as per the set and create a the models separately. To understand the relationship between them, use HBSolveAdjacency to create relationship between different zones.

All apertures, rooms, apertures, doors go into HBModel to create a model. 