# UN-OCHA Case Study-I 

### Case’s Description 
The United Nations Office for the Coordination of Humanitarian Affairs [OCHA](https://www.unocha.org), have recently created a Center for Humanitarian Data (CHD),
which, among other duties, is aimed at the management and modelling of all data related to humanitarian aids. From the headquarter in **The Hague, The Netherlands**, 
you are tasked with the preparation of the data layer for an imminent humanitarian mission to be deployed in the Syrian area.

You are requested to design and implement (in JavaScript) a set of data  abstractions (classes and subclasses) to cover a set of data requirement for a web-based 
mapping application to be used by OCHA staff in the Syrian area. Therefore, the requirements are the followings;

- A **Mission** is the generic concept and contains the following information:
  - id of the mission (mandatory)
  - coordinator’s name(mandatory)

- A specific mission like **SyrianMission** extends the concept of **Mission** and adds the following information:
  - name of the country where the mission is deployed (mandatory, default value = ‘syria’)
  - start date(default value)
  - end date(default value)

- A specific mission tracks an array of humanitarian **Actions**.

- Each humanitarian **Action** contained the following information:
  - the name of the OCHA staff in that place(mandatory)
  - the description of the humanitarian action(mandatory)
  - whether the humanitarian action is over or not in that place (default value = false)
  - total number of (local) people affected(default value = 0)
