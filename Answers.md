# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript UI library that allows a developer to easily build user interfaces that are dynamic in regards to data. 


2. What does it mean to think in react?

React is a component based frontend UI library. We display data and its referred to as "state". Thinking about how we display data on the page for the end user to see. Just think that its "Just the View" from that MVC. The V in MVC.


3. Describe state.

The state object is where you store data property values that belongs to the component. When the state object changes, the component re-renders.


4. Describe props.

React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global states (whatever you pass through that state).


5. What are side effects, and how do you sync effects in a React component to state or prop changes?

useEffect is a hook used to tell React to wait until after the render is complete to do something AFTER render.
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.
