function calculateCloseness(target: string, string: string): number {
  const m = target.length
  const n = string.length

  // Check if string contains target as an exact word
  if (target.includes(string)) {
    // Give higher precedence to strings containing target as an exact word
    return -1
  }

  // Create a 2D array for the dynamic programming approach
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  )

  // Initialize the first row and column of the array
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  // Fill in the array using the Levenshtein distance algorithm
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (target[i - 1] === string[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] =
          Math.min(
            dp[i - 1][j - 1], // substitution
            dp[i][j - 1], // insertion
            dp[i - 1][j] // deletion
          ) + 1
      }
    }
  }

  return dp[m][n]
}

export const compareCloseness = (
  target: string,
  stringA: string,
  stringB: string
): number => {
  const distanceA = calculateCloseness(target, stringA)
  const distanceB = calculateCloseness(target, stringB)

  if (distanceA < distanceB) {
    return -1
  } else if (distanceA > distanceB) {
    return 1
  } else {
    return 0
  }
}

// const targetString = "example";
// const stringArray = ["example1", "example2", "another", "test"];

// const sortedArray = stringArray.sort((stringA, stringB) =>
//   compareCloseness(targetString, stringA, stringB)
// );

// console.log(sortedArray);
