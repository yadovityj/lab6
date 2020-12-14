function Song()
{
    var line1 = "bottle of beer on the wall.";
    var line2 = "bottle of beer on the wall";
    var line3 = "bottle of beer,";
    var line4 = "Take one down, pass it around,";
    let number = 100;
    while (number >= 1, number--)
    {
        if(number !== 99)
        {
            console.log(number + " " + line1);
        }
        console.log(number + " " + line2);
        console.log(number + " " + line3);
        console.log(line4);
    }
}
Song();
