# [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/)

Solution 1: Recurrence

We define two variables p1 and p2 , initially p1 = 0 and p2 = 1.

Next, we perform n iterations. In each iteration, we update the values of p1 and p2 to p2 and p1 + p2 , respectively.

Finally, we return p1.

The time complexity is O(n), where n is the given integer. The space complexity is O(1).
