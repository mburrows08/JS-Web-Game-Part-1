var imgArray = [
    ['assets/green-character.gif', 'fixed', '100px', '100px'],
    ['assets/pine-tree.png', 'fixed', '450px', '200px'],
    ['assets/tree.png', 'fixed', '200px', '300px'],
    ['assets/pillar.png', 'fixed', '350px', '100px'],
    ['assets/crate.png', 'fixed', '150px', '200px'],
    ['assets/well.png', 'fixed', '500px', '425px']
]

//create an array for the images

var itemArray = [
    ['assets/sword.png', 'fixed', '500px', '405px'],
    ['assets/sheild.png', 'fixed', '165px', '185px'],
    ['assets/staff.png', 'fixed', '600px', '100px']
]

//create an array for the items

function newImage(){
    for (i = 0; i < imgArray.length; i++)
    //will index through our array
    {
        let newImage = document.createElement('img')
        //create the image in the document
        newImage.src = imgArray[i][0]
        //gives the source path
        newImage.style.position = imgArray[i][1]
        //fixed position
        newImage.style.left = imgArray[i][2]
        //unique for each array, the indexing makes sure that each unique position is listed in the respective image that is created
        newImage.style.bottom = imgArray[i][3]
        //same comment as line 31
        document.body.append(newImage)
        //append the completed img tag to the document body
    }
    function newItem(){
        for (i = 0; i < itemArray.length; i++){
            let newItem = document.createElement('img')
            newItem.src = itemArray[i][0]
            newItem.style.position = itemArray[i][1]
            newItem.style.left = itemArray[i][2]
            newItem.style.bottom = itemArray[i][3]
            document.body.append(newItem)
            //line 46 introduces an event listener for a user 'dblclick' on all newItems in the itemArray
            newItem.addEventListener('dblclick', function(){
                newItem.remove()
                //line 47 removes the newItem that is double-clicked - since there are 3 'items,' all 3 of these items have this functionality
            })
        }
    }

    newItem()
    //make sure to call the newItem function in the newImage function, so that when newImage is called, newItem runs
}

newImage()
//call the newImage function


//I did not have time to include the background images