function Pattern(n) {
  // Variable initialization
  var i = 1; // Line count

  // Loop to print desired pattern
  var j = 0;
  for (var i = 1; i <= n; ) {
    // If current star count is less than
    // current line number
    if (j < i) {
      document.write("* ");
      j++;
      continue;
    }

    // Else time to print a new line
    if (j == i) {
      document.write("<br>");
      i++;
      j = 0;
    }
  }
}

// Driver code
Pattern(5);
