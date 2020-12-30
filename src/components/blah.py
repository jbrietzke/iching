def main():
    print('In Main')
    num = 7775460
    prime_factors(num)

def prime_factors(num):
    prime_list = [2,3,5,7,11,13,17]
    prime_factors = []
    counter = 2
    max = num / 2
    while(num != 1 and counter < max):
        # print(x, 'is prime: ', is_prime(x, prime_list))
        prime = is_prime(counter, prime_list)
        if prime:
            prime_list.append(counter)
            looping = True
            while(looping):
                if(num % counter == 0):
                    prime_factors.append(counter)
                    num = num / counter
                else:
                    looping = False
        counter += 1
    result = format_results(prime_factors)
    print(result)
    return result

def is_prime(num, prime_list):
    prime = True
    for x in prime_list:
        if (num == x):
            break
        elif (num % x == 0):
            prime = False
            break
    return prime

def format_results(prime_factors):
    last = 0
    quant = 1
    result = ''
    for x in prime_factors:
        if(last == 0):
            last = x
        elif(x == last):
            quant += 1
        else:
            if(quant == 1):
                result += '(' + str(last) + ')'
            elif(quant > 1):
                result += '(' + str(last) + '**' + str(quant) + ')'
            last = x
            quant = 1
    if(quant == 1):
        result += '(' + str(last) + ')'
    elif(quant > 1):
        result += '(' + str(last) + '**' + str(quant) + ')'
    return result

main()