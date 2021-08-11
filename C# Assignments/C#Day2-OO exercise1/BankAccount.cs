using System;

namespace Csharp_Day2_OO_exercise_1
{

    /// <summary>
    /// Create a class called BankAccount and have default constructor to take balance as 500 and another parameterized to take other than 500.
    /// </summary>
    class BankAccount
    {
        double Bal;

        public BankAccount()
        {
            this.Bal = 500.0;
        }

        public BankAccount(double balance)
        {
            this.Bal = balance;
        }

        public double getBalance()
        {
            return Bal;
        }
    }

    class OutputBankAccount
    {
        public static void Main()
        {

            BankAccount b1 = new BankAccount();
            Console.WriteLine("Account Balance default = " + b1.getBalance());

            BankAccount b2 = new BankAccount(1000);
            Console.WriteLine("Account Balance = " + b2.getBalance());

        }
    }
}