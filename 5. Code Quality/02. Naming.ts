// Here, what does temp mean?
function setPairs(pairs: number[], temperature: number = 37): void {
  this._pairsArray[temperature] = pairs.slice();
}
// ptr, idx