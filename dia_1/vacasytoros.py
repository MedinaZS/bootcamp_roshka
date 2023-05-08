import random
from random import sample

secretNum = ""
inputNum = ""
toros = 0
vacas = 0
first_time = True

# Generar numero aleatorio de 4 cifras sin repetir (sin 0 adelante)
while True:
    secretNum = random.sample("1234567890", 4)
    if secretNum[0] != '0': #Si no comienza con 0 es un numero valido, si no que vuelva a obtener
        break

secretNum = "".join(secretNum) #Convertir array numeros en un string

# print(secretNum)

# Volver a dar intentos hasta que adivine el numero
while toros != 4:
    # Reiniciar valores
    toros = 0
    vacas = 0

    # Pedir al usuario que ingrese el numero
    while True:
        if first_time:
            mensaje = '¡Adivina el numero" (Ingresa un numero de 4 digitos):  '
            first_time = False
        else:
            mensaje = "Por favor, intente de nuevo: "

        inputNum = input(mensaje);
        
        if inputNum.isdigit() and len(inputNum) == 4: # Salir del loop si ingreso un valor correcto
            break

    # Buscar si acerto algun numero en la misma posicion (toros)
    for i, randomDigit in enumerate(secretNum):
        for j, inputDigit in enumerate(inputNum):
            if randomDigit == inputDigit:  # Si los numeros son iguales
                if i == j:  # Si estan en la misma posicion (toros)
                    toros += 1
                else:  # Si NO estan en la misma posicion (vacas)
                    vacas += 1

    print(toros, "toro/s, ", vacas, " vaca/s")

# Una vez que adivina el numero sale del loop while e imprime el mensaje 
print("Felicidades! El número secreto era: ", secretNum)
