# ehDeno
A small and easy to use Event Handler for Deno

## How to use:
```typescript
// Import the library
import { EventHandler } from './index.ts';

// Instantiate EventHandler
const events = new EventHandler();
```

## Functions
#### on
Use this function to register an event and add a callback function that will be executed when calling that event.  
**Example**
```typescript
events.on("saysHelloWorld", () => {
    console.log("Hello World");
})
```

#### emit
Use this function to execute all callbacks of an event.  
**Example**
```typescript
events.emit("saysHelloWorld");
```

### clear
Use this function to clear the callbacks list of an event.  
**Example**
```typescript
events.clear("saysHelloWorld");
```
