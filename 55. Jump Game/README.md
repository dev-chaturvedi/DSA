# [55. Jump Game](https://leetcode.com/problems/jump-game/)

 Solution 1: Greedy

We use a variable $mx$ to maintain the farthest index that can currently be reached, initially $mx = 0$.

We traverse the array from left to right. For each position $i$ we traverse, if $mx < i$, it means that the current position cannot be reached, so we directly return `false`. Otherwise, the farthest position that we can reach by jumping from position $i$ is $i+nums[i]$, we use $i+nums[i]$ to update the value of $mx$, that is, $mx = \max(mx, i + nums[i])$.

At the end of the traversal, we directly return `true`.

The time complexity is $O(n)$, where $n$ is the length of the array. The space complexity is $O(1)$.
