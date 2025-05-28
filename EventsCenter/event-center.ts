// 创建事件中心类
type Listener = () => void;

class EventCenter {
  private events: Map<string, Listener[]> = new Map();

  on(event: string, listener: Listener) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(listener);
  }

  emit(event: string) {
    const listeners = this.events.get(event) || [];
    for (const listener of listeners) {
      listener(); // 通知监听者
    }
  }
}

export default EventCenter;
