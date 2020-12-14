function Numbers()
{
    var name = "Slava";
    var surname = "Zayats";
    let number = 100;
    while (number >= 1)
    {
        if (number % 3 === 0 && number % 5 ===0  )
        {
            console.log(name + " " + surname);
        }
        else if (number % 3 === 0)
        {
            console.log(name);
        }
        else if (number % 5 === 0)
        {
            console.log(surname);

        }
        else
        {
            console.log(number);

        }
        number--;
    }
}
Numbers();
