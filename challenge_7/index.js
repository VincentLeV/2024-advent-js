/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regex = /\([^()]*\)/g;

  // Continuously replace the innermost parentheses with their reversed content
  while (regex.test(packages)) {
    packages = packages.replace(
      regex, (match) => match
        .slice(1, -1)
        .split("")
        .reverse()
        .join("")
    );
  }
  
  return packages
}

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"