using System;

namespace Csharp_Day2_OO_exercise_1
{
    /// <summary>
    /// A person has several attributes that include name, date of birth, address and marital status (single, married, divorced or widowed).
    /// Create a four parameter constructor to initialise the fields.Add properties for the fields
    /// Write a method GetAge() to return the age of the person
    /// Write a method CanMarry() to return true or false if a person can get married(people can get married over the age of 18 if they are not already maried)
    /// Write a simple driver program to test the class
    /// </summary>

    class PersonInfo
    {
        public string Name { get; set; }
        public DateTime Dob { get; set; }
        public string Address { get; set; }
        public string Maritalstatus { get; set; }

        public PersonInfo(string Name, DateTime Dob, String Address, String Maritalstatus )
        {
            this.Name = Name;
            this.Dob = Dob;
            this.Address = Address;
            this.Maritalstatus = Maritalstatus;
        }

        public int GetAge()
        {
            int age = DateTime.Today.Year - Dob.Year;
            return age;
        }

        public bool CanMarry()
        {
            if (GetAge() > 18 && !(string.Equals(this.Maritalstatus, "married", StringComparison.OrdinalIgnoreCase)))
                return true;
            else
                return false;
        }

        public string GetDisplay()
        {
            return $"{this.Name} is {GetAge()} years old, is from {this.Address} and is {this.Maritalstatus} hence marriage possibility is {CanMarry()} ";
        }
    }

    class OutputPersonInfo
    {
        public static void Main()
        {
            PersonInfo p = new PersonInfo("Vignesh", new DateTime(1999,9,13), "Chettinad, TamilNadu", "single");
            PersonInfo p1 = new PersonInfo("Vignesh", new DateTime(1999, 9, 13), "Chettinad, TamilNadu", "married");
            Console.WriteLine(p.GetDisplay());
            Console.WriteLine(p1.GetDisplay());
        }
    }

}
