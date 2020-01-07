// Long JSDocs are good for functions that will be used in a lot of different places,
// like abstract methods:
export default abstract class Constraint {
  /**
   * Consume details about a constraint and emit a description of how to show
   * it as a ConstraintBoxConfig
   *
   * @param status details on whether this BoostConstraint was satisfied
   * and some additional details besides.
   * @param forMissionScreen Is this for the mission screen or not?
   * @param undoBlocks A list of puzzle states (with sequence and derivatives)
   * that informs constraints (mostly with the first, current element)
   * @param targetConditions For puzzles with multiple states (say, with or
   * without an oligo) this defines where a Constraint applies)
   *
   * @returns an object specifying the configuration for the box, including
   * whether it's satisfied, an icon, display details, and a tooltip
   */
  public abstract getConstraintBoxConfig(status, forMissionScreen, undoBlocks, targetConditions)
}