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
