1. What problem does the context API help solve?

A. It helps to avoid unneccessary prop drilling on components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A. Actions are events that are triggered by the app or user that trigger changes in state. Reducers are pure functions that return the appropriate state based on the action that was triggered. The Store is used as a place to globally contain and update data in an app. The Store is known as the 'single source of truth' in an app because it is the one place where all of the app's data is held and manipulated.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A. Application state is stored globally and can be accessed throughout the application. Component state is local to the component. One example of when to use Application state is when you need to store user data for the app. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A. Redux thunk is a library that allows us to perform asynchronous operations inside our action creators. The action creator is updated to return a function that dispatches an action rather than dispatching the action directly.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

A. I am a big fan of Redux because, while it's complicated to implement, it makes an application far more maintainable and clean.
