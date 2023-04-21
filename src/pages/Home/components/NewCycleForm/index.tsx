import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggestion"
          placeholder="Dê um nome para seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />

        <datalist id="task-suggestion">
          <option value="Estudar" />
          <option value="Praticar exercícios" />
          <option value="Aprender Inglês" />
          <option value="Codar" />
          {cycles.map((cycle) => (
            <option key={cycle.task} value={cycle.task} />
          ))}
        </datalist>
      </div>

      <div>
        <label htmlFor="minutesAmount">Durante</label>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
