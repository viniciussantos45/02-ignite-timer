import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.activeCycleId = action.payload.newCycle.id
        draft.cycles.push(action.payload.newCycle)
      })
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const cycleToMarkAsFinished = draft.cycles.find(
          (cycle) => cycle.id === state.activeCycleId,
        )

        if (!cycleToMarkAsFinished) {
          return state
        }

        if (cycleToMarkAsFinished) {
          cycleToMarkAsFinished.finishedDate = new Date()
        }

        draft.activeCycleId = null
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const cycleToInterrupt = draft.cycles.find(
          (cycle) => cycle.id === state.activeCycleId,
        )

        if (!cycleToInterrupt) {
          return state
        }

        if (cycleToInterrupt) {
          cycleToInterrupt.interruptDate = new Date()
        }

        draft.activeCycleId = null
      })
    default:
      return state
  }
}
