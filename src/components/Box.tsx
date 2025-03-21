import { useDrag, useDrop } from 'react-dnd'

export function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div ref={dragPreview as any} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div role="Handle" ref={drag as any} />
    </div>
  )
}

export function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'BOX',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div
      ref={drop as any}
      role={'Dustbin'}
      style={{ backgroundColor: isOver ? 'red' : 'white' }}
    >
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}
