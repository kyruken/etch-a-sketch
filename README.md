The purpose of this project is to create a browser form of an etch-a-sketch.
I learned how to use certain properties of flexbox such as the flex grow, flex
shrink, and flex basis properties to change the proportions of the new divs when
added.I learned how to add a class and an eventListener to each of those dynamically created divs. Lastly, I fundamentally learned how to add childs and delete childs from
the DOM using javascript.

Some trouble I had:
- Making my set dimensions button delete the previous nodes and add new nodes 
based on user input
- Making line breaks in flexbox that match up with user input (user inputs 4, then make 4 rows and 4 columns)
    ^An article gave me a great strategy to do this: https://tobiasahlin.com/blog/flexbox-break-to-new-row/
- Making the dynamically created divs shrink based on how many divs were added

The features of this project include: 
1. Fully operational etch-a-sketch blocks that add a class based on the user's mouse hovering over them
2. Set dimensions button that change the dimensions of the etch-a-sketch
3. The etch-a-sketch can create rows and columns of 1x1 to 100x100

