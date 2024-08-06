# print("We have to calculate 2 litter water by using two 4 littler and 3 litter jug")
jug1=0
jug2=0
jug1=int(input("Enter the water in jug1:"))
jug2=int(input("Enter the water in jug2:"))
if(jug1<=4 and jug2<=3):
       yes=input("Write yes if you want to put water of jug2 into jug1:")
       if("yes"==yes):
        jug1=jug2
        print("water shifting done!")
        jug2=0
        print("jug2 is empty now")
        print("water in jug1 is ",jug1)
jug2=int(input("Fill  the water in jug2 again:"))

# jug2=int(input("Enter the water in jug2:"))
if(jug1<=4 and jug2<=3):
    print("currently water in jug1:",jug1)
    print("currently water in jug2:",jug2)
    b=4-jug2
    jug2=jug2-b
    print("fill the jug1 completely")
    print("now the water in jug1 is ",(jug1+b))
    print("water in jug2:",jug2)

jug1=int(input("Make Empty the jug1:"))
if(jug1<=4 and jug2<=3):
    # b=jug1
    # jug1=jug2
    # jug2=b
    print("water in jug1:",jug1)
    print("water in jug2:",jug2)
    


    

