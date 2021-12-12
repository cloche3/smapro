import { VFC } from 'react'
import { Group, Layer, Line, Rect, Stage, Text } from 'react-konva'

type CellProps = {
  label: string
  x: number
  y: number
  width: number
  height: number
  onClick: () => void
}

const Cell: VFC<CellProps> = ({ x, y, width, height, label, onClick }) => {
  return (
    <Group onClick={onClick}>
      <Rect height={height} width={width} x={x} y={y} />
      <Text
        align="center"
        fontSize={14}
        height={height}
        text={label}
        verticalAlign="center"
        width={width}
        x={x}
        y={y + height / 2 - 7}
      />
      <Line
        points={[x, y, x + width, y, x + width, y + height, x, y + height]}
        stroke="black"
        width={2}
        x={0}
        y={0}
        closed
      />
    </Group>
  )
}

type Props = {
  onCellClick: () => void
}

const PerformingStudio: VFC<Props> = ({ onCellClick }) => {
  return (
    <div className="max-w-5xl">
      <Stage height={400} width={1024}>
        <Layer>
          <Line
            points={[1, 1, 1023, 1, 1023, 399, 1, 399]}
            stroke="black"
            width={2}
            x={0}
            y={0}
            closed
          />
        </Layer>
        <Layer>
          {/* 個室 A - B */}
          <Cell
            height={200}
            label="個室A"
            onClick={onCellClick}
            width={100}
            x={924}
            y={0}
          />
          <Cell
            height={200}
            label="個室B"
            onClick={onCellClick}
            width={100}
            x={924}
            y={200}
          />
          {/* 個室 C - F */}
          <Cell
            height={100}
            label="個室C"
            onClick={onCellClick}
            width={100}
            x={0}
            y={0}
          />
          <Cell
            height={100}
            label="個室D"
            onClick={onCellClick}
            width={100}
            x={0}
            y={100}
          />
          <Cell
            height={100}
            label="個室E"
            onClick={onCellClick}
            width={100}
            x={0}
            y={200}
          />
          <Cell
            height={100}
            label="個室F"
            onClick={onCellClick}
            width={100}
            x={0}
            y={300}
          />
          {/* テーブル 1 - 8 */}
          <Cell
            height={60}
            label="テーブル1"
            onClick={onCellClick}
            width={80}
            x={800}
            y={40}
          />
          <Cell
            height={60}
            label="テーブル2"
            onClick={onCellClick}
            width={80}
            x={800}
            y={120}
          />
          <Cell
            height={60}
            label="テーブル3"
            onClick={onCellClick}
            width={80}
            x={800}
            y={220}
          />
          <Cell
            height={60}
            label="テーブル4"
            onClick={onCellClick}
            width={80}
            x={800}
            y={300}
          />
          <Cell
            height={60}
            label="テーブル5"
            onClick={onCellClick}
            width={80}
            x={700}
            y={40}
          />
          <Cell
            height={60}
            label="テーブル6"
            onClick={onCellClick}
            width={80}
            x={700}
            y={120}
          />
          <Cell
            height={60}
            label="テーブル7"
            onClick={onCellClick}
            width={80}
            x={700}
            y={220}
          />
          <Cell
            height={60}
            label="テーブル8"
            onClick={onCellClick}
            width={80}
            x={700}
            y={300}
          />
          {/* テーブル 9 - 16 */}
          <Cell
            height={60}
            label="テーブル9"
            onClick={onCellClick}
            width={80}
            x={250}
            y={40}
          />
          <Cell
            height={60}
            label="テーブル10"
            onClick={onCellClick}
            width={80}
            x={250}
            y={120}
          />
          <Cell
            height={60}
            label="テーブル11"
            onClick={onCellClick}
            width={80}
            x={250}
            y={220}
          />
          <Cell
            height={60}
            label="テーブル12"
            onClick={onCellClick}
            width={80}
            x={250}
            y={300}
          />
          <Cell
            height={60}
            label="テーブル13"
            onClick={onCellClick}
            width={80}
            x={150}
            y={40}
          />
          <Cell
            height={60}
            label="テーブル14"
            onClick={onCellClick}
            width={80}
            x={150}
            y={120}
          />
          <Cell
            height={60}
            label="テーブル15"
            onClick={onCellClick}
            width={80}
            x={150}
            y={220}
          />
          <Cell
            height={60}
            label="テーブル16"
            onClick={onCellClick}
            width={80}
            x={150}
            y={300}
          />
          {/* ステージ */}
          <Cell
            height={60}
            label="ステージ"
            onClick={onCellClick}
            width={240}
            x={400}
            y={40}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default PerformingStudio
