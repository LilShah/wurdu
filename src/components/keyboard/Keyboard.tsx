import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="ح" onClick={onClick} status={charStatuses['ح']} />
        <Key value="چ" onClick={onClick} status={charStatuses['چ']} />
        <Key value="ج" onClick={onClick} status={charStatuses['ج']} />
        <Key value="ث" onClick={onClick} status={charStatuses['ث']} />
        <Key value="ٹ" onClick={onClick} status={charStatuses['ٹ']} />
        <Key value="ت" onClick={onClick} status={charStatuses['ت']} />
        <Key value="پ" onClick={onClick} status={charStatuses['پ']} />
        <Key value="ب" onClick={onClick} status={charStatuses['ب']} />
        <Key value="ا" onClick={onClick} status={charStatuses['ا']} />
        <Key value="آ" onClick={onClick} status={charStatuses['آ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="س" onClick={onClick} status={charStatuses['س']} />
        <Key value="ژ" onClick={onClick} status={charStatuses['ژ']} />
        <Key value="ز" onClick={onClick} status={charStatuses['ز']} />
        <Key value="ڑ" onClick={onClick} status={charStatuses['ڑ']} />
        <Key value="ر" onClick={onClick} status={charStatuses['ر']} />
        <Key value="ذ" onClick={onClick} status={charStatuses['ذ']} />
        <Key value="ڈ" onClick={onClick} status={charStatuses['ڈ']} />
        <Key value="د" onClick={onClick} status={charStatuses['د']} />
        <Key value="خ" onClick={onClick} status={charStatuses['خ']} />
        <Key value="غ" onClick={onClick} status={charStatuses['غ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="ک" onClick={onClick} status={charStatuses['ک']} />
        <Key value="ق" onClick={onClick} status={charStatuses['ق']} />
        <Key value="ف" onClick={onClick} status={charStatuses['ف']} />
        <Key value="غ" onClick={onClick} status={charStatuses['غ']} />
        <Key value="ع" onClick={onClick} status={charStatuses['ع']} />
        <Key value="ظ" onClick={onClick} status={charStatuses['ظ']} />
        <Key value="ط" onClick={onClick} status={charStatuses['ط']} />
        <Key value="ض" onClick={onClick} status={charStatuses['ض']} />
        <Key value="ص" onClick={onClick} status={charStatuses['ص']} />
        <Key value="ش" onClick={onClick} status={charStatuses['ش']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="ے" onClick={onClick} status={charStatuses['ے']} />
        <Key value="ی" onClick={onClick} status={charStatuses['ی']} />
        <Key value="ء" onClick={onClick} status={charStatuses['ء']} />
        <Key value="ھ" onClick={onClick} status={charStatuses['ھ']} />
        <Key value="ہ" onClick={onClick} status={charStatuses['ہ']} />
        <Key value="و" onClick={onClick} status={charStatuses['و']} />
        <Key value="ن" onClick={onClick} status={charStatuses['ن']} />
        <Key value="م" onClick={onClick} status={charStatuses['م']} />
        <Key value="ل" onClick={onClick} status={charStatuses['ل']} />
        <Key value="گ" onClick={onClick} status={charStatuses['گ']} />
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
