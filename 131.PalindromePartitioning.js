/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const isPalindrome = (st) => {
    let firstIndex = 0;
    let lastindex = st.length - 1;
    while (firstIndex < lastindex) {
      if (st[firstIndex] !== st[lastindex]) {
        return false;
      }
      firstIndex++;
      lastindex--;
    }
    return true;
  };
  const dfs = (start, state) => {
    if (start >= s.length) {
      result.push([...state]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      const slice = s.slice(start, i + 1);
      if (isPalindrome(slice)) {
        state.push(slice);
        dfs(i, state);
        state.pop();
      }
    }
  };
  dfs(0, []);
  return result;
};
