using System;

namespace Csharp_Day2_OO_exercise_1
{
    /// <summary>
    /// Circle is a class with property radius and methods setRadius(), getRadius(), calcDiameter(), calcArea(). 
    /// Use double precision for everything.Write appropriate driver program to test the methods.
    /// </summary>
    class Circle
    {
        double radi;

        public void setRadius(double r)
        {
            this.radi = r;
        }

        public double getRadius()
        {
            return radi;
        }

        public double calcDiameter()
        {
            return radi * 2;
        }

        public double calcArea()
        {
            return Math.PI * radi * radi;
        }
    }
    
    class Outputcircle
    {
        public static void Main()
        {
            Console.Write("Enter Radious of Circle - ");
            double r = double.Parse(Console.ReadLine());

            Circle c = new Circle();
            c.setRadius(r);
            Console.WriteLine("Entered Radious = " + c.getRadius());
            Console.WriteLine("Diameter = " + c.calcDiameter());
            Console.WriteLine("Area = " + c.calcArea());

        }
    }
}
