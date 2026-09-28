import React, { useState } from 'react';
import { Smartphone, Monitor, Wifi, WifiOff, Users, Clock, QrCode, ArrowRight, RotateCcw } from 'lucide-react';

export const SmartQueueVisual: React.FC = () => {
  const [currentServing, setCurrentServing] = useState(24);
  const myTicket = 28;
  const [isOffline, setIsOffline] = useState(false);
  const [syncedCount, setSyncedCount] = useState(0);

  const remainingPeople = Math.max(0, myTicket - currentServing);
  const estimatedTime = remainingPeople * 3;

  const handleNextCustomer = () => {
    if (currentServing < 35) {
      setCurrentServing((prev) => prev + 1);
      if (isOffline) {
        setSyncedCount((prev) => prev + 1);
      }
    }
  };

  const handleResetQueue = () => {
    setCurrentServing(24);
    setSyncedCount(0);
  };

  const handleToggleOffline = () => {
    setIsOffline(!isOffline);
    if (isOffline) {
      // Reconnected, sync pending
      setSyncedCount(0);
    }
  };

  return (
    <div className="w-full bg-[#0d1017] rounded-xl border border-slate-800/80 overflow-hidden font-sans shadow-xl">
      {/* Top Architecture Status Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#090b10] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>DISTRIBUTED_QUEUE · DUAL_DEVICE_SHOWCASE</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            WEBSOCKET + INDEXED_DB OFFLINE-FIRST
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleOffline}
            className={`px-2 py-0.5 rounded text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${
              isOffline
                ? 'bg-amber-950 text-amber-300 border border-amber-800'
                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            }`}
          >
            {isOffline ? <WifiOff className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
            <span>{isOffline ? 'OFFLINE (IndexedDB Active)' : 'WEBSOCKET (Live Synchronized)'}</span>
          </button>
        </div>
      </div>

      {/* Main Dual Showcase Grid */}
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Device 1: Mobile Citizen View (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[270px] bg-slate-950 rounded-[32px] p-2.5 border-[3px] border-slate-700 shadow-2xl">
            {/* Phone Screen Mockup */}
            <div className="w-full bg-white text-slate-900 rounded-[24px] overflow-hidden p-3.5 space-y-2.5 text-left text-xs shadow-inner select-none">
              {/* iOS Status Bar */}
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-700 pb-1">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-slate-700 rounded-xs flex items-center p-0.5">
                    <div className="h-full w-2.5 bg-slate-900" />
                  </div>
                </div>
              </div>

              {/* Greeting */}
              <div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <span>📍 Jakarta Barat, Kebon Jeruk</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">Hello, Jeco</div>
              </div>

              {/* Service Select Box */}
              <div className="bg-slate-100 p-2 rounded-lg border border-slate-200 text-[11px]">
                <div className="text-[10px] text-slate-500">1. Instansi Layanan</div>
                <div className="font-semibold text-slate-800">Puskesmas Kebon Jeruk</div>
              </div>

              {/* Live Kondisi Antrean */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Live Kondisi Antrean</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="bg-white p-1 rounded border border-slate-100">
                    <div className="text-[9px] text-slate-400">Sedang Dilayani</div>
                    <div className="text-xs font-bold text-blue-600 font-mono">A-{currentServing}</div>
                  </div>
                  <div className="bg-white p-1 rounded border border-slate-100">
                    <div className="text-[9px] text-slate-400">Sisa Antrean</div>
                    <div className="text-xs font-bold text-slate-800 font-mono">{remainingPeople} Org</div>
                  </div>
                  <div className="bg-white p-1 rounded border border-slate-100">
                    <div className="text-[9px] text-slate-400">Estimasi</div>
                    <div className="text-xs font-bold text-slate-800 font-mono">{estimatedTime} Mnt</div>
                  </div>
                </div>
              </div>

              {/* Active Ticket Card */}
              <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between text-[10px] font-bold text-blue-900">
                  <span>TIKET AKTIF ANDA</span>
                  <span className="text-emerald-700 font-mono">MENUNGGU</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Puskesmas Kebon Jeruk</div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-blue-200/60">
                  <div className="text-2xl font-extrabold text-blue-700 font-mono tracking-tight">
                    A-{myTicket}
                  </div>
                  <div className="w-8 h-8 rounded bg-white border border-blue-200 flex items-center justify-center text-blue-800">
                    <QrCode className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="text-center pt-0.5">
                <button className="text-[10px] text-red-500 hover:text-red-700 font-medium">
                  Batalkan Tiket
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Device 2: Staff Counter Console (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-slate-200">Staff Counter Console (Loket 01)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Puskesmas Kebon Jeruk</span>
            </div>

            <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 font-mono">NOW CALLING</span>
                <div className="text-2xl font-black text-white font-mono tracking-tight">
                  A-{currentServing}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleNextCustomer}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <span>Call Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleResetQueue}
                  title="Reset counter"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Offline-First & WebSocket Diagnostics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/80">
                <div className="text-slate-400 text-[11px]">Real-Time Channel</div>
                <div className="font-mono text-slate-200 font-semibold mt-0.5 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${isOffline ? 'bg-amber-500' : 'bg-emerald-400'}`}
                  />
                  <span>{isOffline ? 'Offline' : 'WebSocket Connected'}</span>
                </div>
              </div>

              <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/80">
                <div className="text-slate-400 text-[11px]">Local IndexedDB Buffer</div>
                <div className="font-mono text-slate-200 font-semibold mt-0.5">
                  {isOffline ? `${syncedCount} queued actions` : 'Synced · In Memory'}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              When network connection drops, staff and citizens continue generating queue tickets stored in browser IndexedDB. Upon reconnection, WebSocket automatically synchronizes distributed ticket logs without data loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
