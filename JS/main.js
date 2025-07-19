// JavaScript code to demonstrate dictionary and display results in HTML elements
function my_Dictionary()    {
    var Computer = { // Creating a dictionary object named Computer
        Type: "Desktop", // Key value pair. Key is Type and value is Desktop.
        Brand: "Dell",
        Location: "Living room",
        Windows: "Windows 11",
        Color: "Black",
        Managed: "Yes"
    };
    delete Computer.Windows; // Deleting the Windows property - undefined
    document.getElementById("Dictionary").innerHTML = Computer.Windows; // Displaying the value of Windows property in HTML element with id "Dictionary"
}