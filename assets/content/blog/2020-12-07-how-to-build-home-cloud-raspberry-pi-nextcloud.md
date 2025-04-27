---
title: "How to: Build a home cloud with a Raspberry Pi and Nextcloud"
date: 2020-12-07T22:24:51.383Z
draft: true
description: Get rid of Dropbox and Google Drive and build your own file-sync
  system hosted in a computer at home.
tags:
  - raspberry-pi,
  - how-to
featuredImage: /cms/img/raspberrypi.jpg
categories:
  - raspberry-pi
---
Raspberry + Nextcloud + Bind9
Instalar Raspberry Pi OS Lite
Instalar Nextcloud
Instalar bind9 y configurarlo

## Introduction

It's likely that you are user of one of those file syncing services like Dropbox, Drive, OneDrive, where you can host your files and have them available on every computer or handheld you own. And you might have felt like some files you uploaded are too confidential to be read by anyone. And still you are uploading them to a service managed by people you don't know. They surely have tons security measures so that not even the employees of those companies can read them, or do they?

With this guide, you'll be able to host and control your own file syncing service at home for the price of a Raspberry (and a microSD card, an USB cable, and maybe a case and an ethernet cable)

## Requirements

* A Raspberry Pi.
* A microSD card.
* A case compatible with the Raspberry model you use.

That's it. For higher performance, I would recommend the following too:

* Make it a Raspberry Pi 4, which is the first in the family to support Gigabit ethernet connection.
* A 1000BaseT (Gigabit) ethernet cable. It can be a Cat5e, Cat6 or higher category cable.
* A good broadband connection.

## Steps

The steps we are going to take are:

1. Install Raspberry Pi OS (formerly known as Raspbian) Lite on the SD card
2.

1. Instalar Raspberry Pi OS Lite.
2. Instalar Apache y PHP con ciertas extensiones.
3. Instalar Nextcloud. Buscar en la página oficial los pasos.
4. Instalar y configurar Bind9. Enlazar con documentación oficial y poner archivos de configuración míos.
