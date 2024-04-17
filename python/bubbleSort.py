# my_array = [ 7,9,11,3,12 ]

# n = len(my_array)
# for i in range(n - 1) :
#     print("n in for outside ", i)
#     print("array for outside " , my_array)
#     for j in range(n - i - 1) :
#         print("n in for inside ", j)
#         print("array for inside " , my_array)
#         if my_array[j] > my_array[j+1] :
#             print("in if ")
#             my_array[j], my_array[j+1] = my_array[j+1] , my_array[j]
            
# print("Sort array with bubble sort : " , my_array )

def bubbleSort(array):
    isSorted = False
    interation = 0
    
    while not isSorted:
        isSorted = True
        for i in range(len(array) - 1 - interation) :
            if array[i] > array[i+1]:
                swap(i, i+1, array)
                isSorted = False
        interation += 1
        print (array)
    return array

def swap(i, j, array):
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
    
arr = [1,3,5,4,2]

bubbleSort(arr)