# --------------Overview----------------------------

- constructor function
    > const users = new Array('ld', 'mario') (array construtor)
    > const name = new String('LD) (obj constructor)
    > const number = new Number(3);
    > const bool = new Boolean(true)
    > null, undefiend -> nothing 
- Everything in JS is Object (false) - ex: number, boolean, undefined, null
- Why use name.toUpperCase() ?
- JS is wrapping the primmitive value up in an object like which is when has access to those methods an properties and method

# -------------------Classes-----------------------

- A Class is a blueprint for an object(it describes how one should be made)
- Ex: 
 > Properties: it's colour, model, engine size
 > Functionnality: drive, reserve, brake
- User Class
    >  { 
        username, email, login(), logout(),
    }
    > new User('ld', 'ld@gmail.com')

- Constructor function is the thing that actually constructs our object and sets the properties on it

- the new keyword
> 1. it creates a new empty object {}
> 2. it binds the value of 'this' to the new empty object
> 3. it calls the constructor function to 'build'  object

- Instance of object refers to the individual object that we
actually create using the class

-  Ex: userOne.login().logout(); 
 > error because we return undefined

- Solve:
    > if we want we could return this

    > So now every time we call one of these methods we're
    > returning the object instance itself and since now
    > we return the object instance we can call another
    > method on it straight away

    > => like this we can chain them together

    > You don't want method changenable -> you don't always
    > to return this 

    > You could do that but if you want to chain them together
    >  then you can return this 

- Class Inheritance: 
  > Now subclasses are classes which inherits functionality from another class but also have their own additional properties and methods 
  > Subclass extend another class
  > Auto get constructor of parent
  > Define extra method

- Super
    > we could ask to run this constructor
    > Call super
    > Find parent class; runs that constructors to set up properties
    > We need to pass in these 2 arguments a user name and an email and score
    > Super properties has agrument

- Constructors
    > JS doesn't actually have classes build into it
    > Instead it uses a prototype models implement the same kind of behavior

- Prototypes
    > Every object in jS has a prototype
    > Prototypes contain all the methods for that object type
    > Ex: Date prototype: getDay(), getMonth(), ....
    > The protocol property doesn't store the methods here
    > _proto_ each user point to this user prototype and has access to all of the methods on there
    > vd [1, 2, 3, 4] point to Array prototype
    > User.call(this, username, email);
    > Admin.prototype = Object.create(User.prototype);

- Everything ultimately inherits from Object