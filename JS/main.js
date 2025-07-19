// JavaScript code to demonstrate dictionary and display results in HTML elements
function my_Dictionary()    {
    var Computer = {
        Type: "Desktop",
        Brand: "Dell",
        Location: "Living room",
        Windows: "Windows 11",
        Color: "Black",
        Managed: "Yes"
    };
    delete Computer.Windows; // Deleting the Windows property - undefined
    document.getElementById("Dictionary").innerHTML = Computer.Windows;
}