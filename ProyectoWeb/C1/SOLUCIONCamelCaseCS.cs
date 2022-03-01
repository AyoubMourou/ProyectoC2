using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class HelloWorld
    {
        public static void Main()
        {
            Console.WriteLine(CamelCase("esta es mi frase favorita"));

            Console.WriteLine("Pulse una tecla para salir...");
            Console.ReadLine();
        }

        public static string CamelCase(string original)
        {
            string car = " ";
            string final = "";
            int i = 1;

            final = original.Substring(0, 1).ToUpper();

            while (i< original.Length)
            {
                car = original.Substring(i, 1);
                if (car==" ")
                {
                    i++;
                    final += original.Substring(i, 1).ToUpper();
                }
                else
                    final += car.ToLower();

                i++;
            }

            return final;
        }

    }
}
