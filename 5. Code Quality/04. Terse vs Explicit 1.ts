// overly terse
function getOrderMap(otherOrder: number[]): number[] {
  if (this._oligos == null) {
      return null;
  }

  let idxMap: number[] = [];
  let ofs: number[] = [];
  let ii: number = this._sequence.length;
  let jj: number;
  for (jj = 0; jj < this._oligos.length; jj++) {
      ofs[this._oligosOrder[jj]] = ii;
      ii += 1 + this._oligos[this._oligosOrder[jj]].sequence.length;
  }
  for (ii = 0; ii < this._sequence.length; ii++) idxMap[ii] = ii;
  for (jj = 0; jj < this._oligos.length; jj++) {
      let zz: number = (otherOrder == null ? jj : otherOrder[jj]);
      let kk: number = ofs[zz];
      let xx: number;
      for (xx = 0; xx <= this._oligos[zz].sequence.length; xx++) {
          idxMap[ii + xx] = kk + xx;
      }
      ii += xx;
  }
  return idxMap;
}

/**
 * Return map of current base indices to adjusted base indices when oligos are rearranged
 * according to otherorder
 * @param otherOrder An array of indexes, where the index refers to the new index
 * the oligo at the given position in the old array should be placed at.
 * E.g., given oligos in order A B C, [1,2,0] means their new order should be C, A, B
 * (oligo A, with the old index of 0, should be at new index 1)
 */
function reorderedOligosIndexMap(otherOrder: number[]): number[] {
    if (this._targetOligos == null) return null;

    let originalIndices: number[][] = [];
    let oligoFirstBaseIndex = this._sequence.length;

    for (let oligo of this._targetOligos) {
        // The + 1 is used to account for the "cut" base denoting split points between strands
        originalIndices.push(Utility.range(oligoFirstBaseIndex, oligoFirstBaseIndex + oligo.sequence.length + 1));
        oligoFirstBaseIndex += oligo.sequence.length + 1;
    }

    let newOrder = otherOrder || Utility.range(this._targetOligos.length);

    return Utility.range(this._sequence.length).concat(
        ...Utility.range(this._targetOligos.length).map((idx) => originalIndices[newOrder.indexOf(idx)])
    );
}
