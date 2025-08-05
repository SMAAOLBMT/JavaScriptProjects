function my_Dictionary()
{
    var Animal = 
    {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //delete operator
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //as value deleted, undefined will print
}