
export const setNewOffset = (card, mouseMoveDir = {x: 100, y: 100}) => {

  const offsetLeft = card.offsetLeft - mouseMoveDir.x;
  const offsetTop = card.offsetTop - mouseMoveDir.y;

  return {
    x: offsetLeft < 0 ? 0: offsetLeft,
    y: offsetTop < 0 ? 0: offsetTop,
  }

}