# implementation using stack

def isPalindrome(string): 
    stack = []
    mid = len(string)//2
    odd = len(string) % 2 == 1
    
    for i in range(len(string)):
        if i == mid and odd :
            continue
        elif i < mid:
            stack.append(string[i])
        else:
            if string[i] != stack.pop():
                return False
    return len(stack) == 0

print(isPalindrome("abcba"))


# implementation sliding window

def isPalindrome(string): 
    left = 0
    right = len(string) - 1
    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1
    return True

print(isPalindrome("abcba"))

# implementation recursion

def isSectionPalindrome(string, i):
    left = i
    right = len(string) - 1 - i
    if left >= right:
        return True
    if string[left] != string[right]:
        return False
    return isSectionPalindrome(string, i + 1)
    
def isPalindrome(string): 
    i = 0
    return isSectionPalindrome(string, i)

print(isPalindrome("abcba"))


# implement with reverse

def isPalindrome(string):
    return string == string[::-1]
    
print(isPalindrome("abcba"))


